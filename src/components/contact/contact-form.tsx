import {
  Alert,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: formData,
      });

      // console.log(res);

      if (res.ok) {
        // console.log("SUCCESS");
        setStatus("success");
      } else {
        // console.log("ERROR");
        setStatus("error");
      }
    } catch (err) {
      // console.log("ERROR", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{ maxWidth: 500, mx: "auto", p: 4, borderRadius: 3 }}
    >
      <Typography variant="h5" gutterBottom>
        Contact Us
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        {/* Required hidden fields */}
        <input type="hidden" name="accessKey" value="sf_f9ih7i293mh7nd19lm0eld92" />

        <TextField label="Name" name="name" required fullWidth />

        <TextField
          label="Email"
          name="email"
          type="email"
          required
          fullWidth
        />

        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          required
          fullWidth
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          {loading ? "Sending..." : "Send"}
        </Button>

        {status === "success" && (
          <Alert severity="success" sx={{ mt: 2 }}>
            Message sent successfully! We’ll get back to you soon.
          </Alert>
        )}

        {status === "error" && (
          <Alert severity="error" sx={{ mt: 2 }}>
            Something went wrong. Please try again later.
          </Alert>
        )}
      </Box>
    </Paper>
  );
}
