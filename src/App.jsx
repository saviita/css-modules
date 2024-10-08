import Button from "./button/Button";
import Card from "./card/Card";

const App = () => {
  return  (
  <>
  <Card title='sedans' text='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.' img='/assets/images/sedans.svg'/>
  <Card title='suvs' text='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.' img='/assets/images/suvs.svg'/>
  <Card title='luxury' text='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. ' img='/assets/images/luxury.svg'/>
  </>
  );
};
export default App;