import {Headers, Button, Paragraphs, Tags} from "../components";

export default function Home(): JSX.Element {

  return (
    <>
      <Headers tag="h1" children="Текст тут" />
      <Button appearance={"primary"} arrow={"right"}>Кнопка </Button>
      <Button appearance={"ghost"} arrow={'down'}>Кнопка </Button>
        <Paragraphs size={"small"}>Sdasdasdasd</Paragraphs>
        <Paragraphs >Sdasdasdasd</Paragraphs>
        <Paragraphs size={"bold"}>Sdasdasdasd</Paragraphs>
        <Tags size='small' color='red'>red</Tags>
        <Tags size='normal' color='green'>green</Tags>
        <Tags color='ghost'>Ghost</Tags>
        <Tags color='primary'>primary</Tags>
    </>
  );
}
