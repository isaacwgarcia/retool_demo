import RetoolWrapper from "@/components/RetoolWrapper";
import { useSession, signIn, signOut } from "next-auth/react";
import { Box, Button, LinearProgress } from "@mui/material";

const Home = () => {
  const { data, status } = useSession();

  if (status === "loading")
    return (
      <>
        <LinearProgress />
      </>
    );
  if (status === "authenticated") {
    return (
      <Box
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Box
          style={{
            height: "5vh",
            display: "flex",
            justifyContent: "flex-end",
            margin: "10px",
          }}
        >
          <Button style={{ color: "white" }} onClick={signOut}>
            Sign Out
          </Button>
        </Box>
        <Box style={{ height: "90vh" }}>
          <RetoolWrapper retoolAppName="currencyChart" data={data} />
        </Box>
      </Box>
    );
  } else {
    signIn();
  }
};

export default Home;
