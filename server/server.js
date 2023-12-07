import express from "express";
import cors from "cors";
import _ from "lodash";
const app = express();

import cards from "../mock/cards.json" assert { type: "json"} ;

app.use(cors());

app.get("/api/cards", async (req, res) => {
    const { name, type, limit = 20 } = req.query;
  
    if (_.every([name, type], (item) => item === undefined)) {
      return res.json(cards.cards.slice(0, limit));
    }
  
    res.json({
      cards: _.filter(cards, (card) => {
        const upperName = _.toUpper(_.get(req, "query.name", ""));
        const upperType = _.toUpper(_.get(req, "query.type", ""));
        const checkName = _.includes(_.toUpper(card.name), upperName);
        const checkType = _.includes(_.toUpper(card.type), upperType);
        return checkName && checkType;
      }),
    });

  });

app.listen(3030, () => console.log("app start @ http://localhost:3030/"));
