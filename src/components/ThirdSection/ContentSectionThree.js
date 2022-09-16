import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import weather from "../../images/weather.png";
import zapovednik from "../../images/zapovednik.png";
import mountain from "../../images/mountain.png";
import colos from "../../images/colos.png";
import forest from "../../images/forest.png";
import city from "../../images/city.png";
import sun from "../../images/sun.png";
import Button from "@mui/material/Button";
import "./style.css";
import { fontSize } from "@mui/system";

function ContentSectionThree() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        columns={{ xs: 1, md: 12 }}
      >
        <Grid item xs={2} className="thirdsection"></Grid>
        <Grid item xs={4} className="thirdsection">
          <div className="thirdsectioncontent">
            <div>
              <span>Отдых рядом с городом</span>
            </div>
            <div>
              <h1>Коргалжынский заповедник</h1>
            </div>
            <div>
              <p>
                Коргалжынский государственный природный заповедник называют
                жемчужиной края
              </p>
            </div>
            <div>
              <Button
                size="medium"
                variant="contained"
                sx={{
                  color: "white",
                  border: "1px solid #e7e7e7",
                  marginTop: "20px",
                  borderRadius: '', 
                  fontSize: '13px'               
                }}
                variant="text"
              >
                подробнее >
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} className="thirdsection">
          <div className="thirdflex">
            <div>
              <img src={weather} alt="weather" />
            </div>
            <div>
              <img src={colos} alt="weather" />
            </div>
            <div>
              <img src={zapovednik} alt="weather" />
            </div>
            <div>
              <img src={mountain} alt="weather" />
            </div>
            <div>
              <img src={forest} alt="weather" />
            </div>
            <div>
              <img src={city} alt="weather" />
            </div>
            <div>
              <img src={sun} alt="weather" />
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContentSectionThree;
