import Container from "../elements/Container";
import HeroImage from "../../../assets/images/hero.png";
import Typography from "../../design-system/typography";
import Button from "../../design-system/Button";
export default function HeroHome() {
  return (
    <div
      style={{ backgroundImage: `url(${HeroImage})` }}
      className="bg-cover bg-center "
    >
      <Container>
        <div className="flex justify-end items-center py-32">
          <div className="rounded-md bg-secondery-hover py-10 px-6 w-1/2 h-auto">
            <Typography size="sm" className="font-semibold">
              New Arrival
            </Typography>
            <Typography
              size="extraBig"
              color="primery"
              className="font-bold mt-4"
            >
              Discover Our New Collection
            </Typography>
            <Typography size="lg" className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </Typography>

            <Button color="primery" size="sm" className="mt-4">
              BUY Now
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
