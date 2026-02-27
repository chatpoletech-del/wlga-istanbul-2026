const { Server } = require("socket.io");
const http = require("http");

const server = http.createServer();
const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"] }
});

const sessions = {};

io.on("connection", (socket) => {
  console.log(`Client connected: ${socket.id}`);

  socket.on("join_session", (session_id) => {
    socket.join(session_id);
    if (!sessions[session_id]) {
      sessions[session_id] = { questions: [], questionCount: 0 };
    }
    socket.emit("session_state", sessions[session_id].questions);
  });

  socket.on("submit_question", ({ session_id, question_text, attendee_id, submitter_name }) => {
    const question = {
      id: `Q-LIVE-${Date.now()}`,
      session_id,
      question_text,
      submitted_by: attendee_id || "anonymous",
      submitter_name: submitter_name || "Anonymous",
      votes: 0,
      status: "Submitted",
      submitted_at: new Date().toISOString()
    };
    sessions[session_id].questions.push(question);
    io.to(session_id).emit("new_question", question);
  });

  socket.on("vote_question", ({ session_id, question_id }) => {
    const session = sessions[session_id];
    if (session) {
      const q = session.questions.find(q => q.id === question_id);
      if (q) {
        q.votes = (q.votes || 0) + 1;
        io.to(session_id).emit("question_updated", q);
      }
    }
  });

  socket.on("moderator_action", ({ session_id, question_id, action }) => {
    const session = sessions[session_id];
    if (session) {
      const q = session.questions.find(q => q.id === question_id);
      if (q) {
        q.moderator_selected = (action === "select");
        q.status = action === "select" ? "Asked" : "Declined";
        io.to(session_id).emit("question_updated", q);
      }
    }
  });

  socket.on("disconnect", () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`WebSocket server running on port ${PORT}`));
