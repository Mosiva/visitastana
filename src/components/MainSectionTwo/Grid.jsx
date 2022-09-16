import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Ship from "../../images/ship.png";
import "./style.css";
import fHundred from "../../images/fHundred.png";
import fThousand from "../../images/fThousand.png";
import fTg from "../../images/fTg.png";
export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        columns={{ xs: 1, md: 12 }}
      >
        <Grid item xs={5}>
          <div className="shipimg">
          <img src={Ship} alt="ship" />
          </div>
        </Grid>
        <Grid item xs={5}>
          <div className="textright">
            <h1>ДОБРО ПОЖАЛОВАТЬ В АСТАНУ:)</h1>
            <br />
            <p>
              Астана - столица независимого Казахстана. Это молодой,
              современный, комфортный и динамичный город в котором каждый
              человек почувствует гостеприимность и радушие столицы.
            </p>
          </div>
          <div className="chislaflex">
            <div>
              <img alt="Avatar" src={fHundred} />
              <p>достопримечательностей</p>
            </div>
            <div>
              <img alt="Avatar" src={fTg} />
              <p>объектов питания</p>
            </div>
            <div>
              <img alt="Avatar" src={fThousand} />
              <p>доступных мероприятий</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
