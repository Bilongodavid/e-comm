import Container from "../components/elements/Container";
import Button from "./Button";
import Typography from "./typography";

export default function UI() {
  return (
    <Container>
      <div>
        <h1 className="text-xl">Element Button</h1>
        <div className="flex items-center space-x-5 mt-4">
          <Button color="primery" size="xs">
            Button xs
          </Button>
          <Button color="primery-outline" size="xs">
            Button xs
          </Button>
          <Button color="primery" size="sm">
            Button sm
          </Button>
          <Button color="primery-outline" size="sm">
            Button sm
          </Button>
          <Button color="primery" size="big">
            Button big
          </Button>
          <Button color="primery-outline" size="big">
            Button big
          </Button>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-xl">Element typography</h1>
        <div className="my-4 space-y-2">
          <Typography size="sm" className="font-semibold">
            New Arrival
          </Typography>
          <Typography size="extraBig" color="primery" className="font-bold">
            Discover Our New Collection
          </Typography>

          <Typography size="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </Typography>
          <Typography size="big" className="font-bold">
            Browse The Range
          </Typography>
          <Typography size="xl" color="gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </div>
      </div>
    </Container>
  );
}
