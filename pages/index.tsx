import { Headers, Button, Paragraphs, Tags, Rating } from "../components";
import React, { useEffect, useState } from "react";
import { withLayout } from "../layout/Layout";

function Home(): JSX.Element {
  const [counter, setCounter] = React.useState<number>(0);
  const plusCounter = () => {
    setCounter((x) => x + 1);
  };

  useEffect(() => {
    console.log(counter + " mount");
    return function unmountClear() {
      console.log("unmount");
    };
  });
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Headers tag="h1" children={counter} />
      <Button appearance={"primary"} arrow={"right"} onClick={plusCounter}>
        Кнопка{" "}
      </Button>
      {/*<Button appearance={"ghost"} arrow={"down"}>*/}
      {/*  Кнопка{" "}*/}
      {/*</Button>*/}
      {/*<Paragraphs size={"small"}>{counter}</Paragraphs>*/}
      {/*<Paragraphs>Sdasdasdasd</Paragraphs>*/}
      {/*<Paragraphs size={"bold"}>Sdasdasdasd</Paragraphs>*/}
      {/*<Tags size="small" color="red">*/}
      {/*  red*/}
      {/*</Tags>*/}
      {/*<Tags size="normal" color="green">*/}
      {/*  green*/}
      {/*</Tags>*/}
      {/*<Tags color="ghost">Ghost</Tags>*/}
      {/*<Tags color="primary">primary</Tags>*/}
      {/*{counter}*/}
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);
