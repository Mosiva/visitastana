import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import baiterek from "../../images/baiterek.png";
import shater from "../../images/shater.png";
import theatre from "../../images/theatre.png";
import konak from "../../images/konak.png";
import people from "../../images/people.png";
import talan from "../../images/talan.png";

function ContentSecondSection() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        columns={{ xs: 1, md: 12 }}
      >
        <Grid item xs={5} className="textleft">
          <h1>#Astana</h1>
          <p>6 причин посетить город</p>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        columns={{ xs: 1, md: 12 }}
      >
        <Grid item xs={4} className="">
          <div className="secondflex">
            <div className="secondcard">
              <img alt="Avatar" src={baiterek} class="center" />
              <div className="container">
                <h4>
                  <b>Достопримечательности</b>
                </h4>
                <p>
                  Футуристический город посреди степи — левый берег,
                  олицетворяющий техногенное будущее.
                </p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={4} className="">
          <div className="secondflex">
            <div className="secondcard">
              <div className="container">
                <h4>
                  <b>Самый большой шатёр в мире</b>
                </h4>
                <p>
                  ТРЦ Хан Шатыр является первым и единственным
                  лайфстайл-центром, который объединяет шопинг и развлечения
                  мирового уровня под одной крышей.
                </p>
              </div>
              <img alt="Avatar" src={shater} class="center" />
            </div>
          </div>
        </Grid>
        <Grid item xs={4} className="">
          <div className="secondflex">
            <div className="secondcard">
              <img alt="Avatar" src={talan} class="center" />
              <div className="container">
                <h4>
                  <b>Уникальная архитектура</b>
                </h4>
                <p>
                Самая молодая и динамично развивающаяся столица стран СНГ. Возможно, именно поэтому архитектура города столь необычна и поразительна
                </p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={4} className="">
          <div className="secondflex">
            <div className="secondcard">
              <img alt="Avatar" src={konak} class="center" />
              <div className="container">
                <h4>
                  <b>Гостеприимство</b>
                </h4>
                <p>
                Если вы заблудились, местные никогда не откажут в помощи. Дружелюбие казахов не знает границ.
                </p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={4} className="">
          <div className="secondflex">
            <div className="secondcard">
              <img alt="Avatar" src={theatre} class="center" />
              <div className="container">
                <h4>
                  <b>Самая большая опера</b>
                </h4>
                <p>
                Своим величием он поразил немало туристов, а внутри здание украшено еще лучше, чем снаружи.
                </p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={4} className="">
          <div className="secondflex">
            <div className="secondcard">
              <img alt="Avatar" src={people} class="center" />
              <div className="container">
                <h4>
                  <b>Люди</b>
                </h4>
                <p>
                Несмотря на климат столицы, люди в городе очень добрые и всегда готовы прийти на помощь.
                </p>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContentSecondSection;
