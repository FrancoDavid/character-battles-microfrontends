import { Card, CardContent, Grid, Typography } from "@mui/material";

function DbzApp() {
  // const handleAttackClick = () => {
  //   console.log("click");
  //   window.dispatchEvent(new CustomEvent("battle:attack-player-one"));
  // };

  // useEffect(() => {
  //   getCharacter().then((character) => setCharacter(character));
  // }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Card
          sx={{
            bgcolor: "red",
          }}
        >
          <CardContent>
            <Typography>Hola aca prodyctos</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default DbzApp;
