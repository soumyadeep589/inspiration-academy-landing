import { API_CONFIG } from "@/lib/config";
import {
  Alert,
  Box,
  Button,
  Paper,
  TextField
} from "@mui/material";
import { FC, useState } from "react";

const ContactForm: FC = () => {
  const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY;

  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch(API_CONFIG.forms, {
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
      sx={{ maxWidth: { xs: "90%", md: 760 }, mx: "auto", px: { xs: 2, md: 6 }, py: { xs: 6, md: 8 }, borderRadius: 3, my: { xs: 8, md: 10 } }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        {/* Required hidden fields */}
        <input type="hidden" name="accessKey" value={accessKey} />

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
          sx={{ mt: 2, py: 2 }}
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

export default ContactForm;
