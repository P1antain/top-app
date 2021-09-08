import {Headers, Button} from "../components";

export default function Home():JSX.Element {
  return (
    <>
      <Headers tag='h1' children='Текст тут'/>
        <Button appearance={"primary"}>Кнопка </Button>
        <Button appearance={"ghost"}>Кнопка </Button>
    </>
  );
}
