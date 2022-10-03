import Card from "./Cards/Card";
import coinmarket from '../../Assets/Works/cryptocoin.png'
import foodieland from '../../Assets/Works/foodieland.png'
import marioCrud from '../../Assets/Works/marioCrud.png'
import mymovies from '../../Assets/Works/mymovies.png'
import weatherapp from '../../Assets/Works/weatherapp.png'
import logistic from '../../Assets/Works/logistic.png'
function Works() {
  return (
    <div className="w-full h-full py-8 text-white flex justify-center items-center flex-wrap gap-y-6 gap-x-16">
      <Card
        name="Coin Market"
        github="https://github.com/martincrisdarr/crypto-coins"
        web="https://crypto-coins-eight.vercel.app/"
        image={coinmarket}
      />
      <Card
        name="Movies App"
        github="https://github.com/martincrisdarr/my-movies"
        web="https://my-movies-two.vercel.app/"
        image={mymovies}
      />
      <Card
        name="Mario crud"
        github="https://github.com/martincrisdarr/Mario-Crud"
        web="https://mariocrud.vercel.app/"
        image={marioCrud}
      />
      <Card
        name="Weather App"
        github="https://github.com/martincrisdarr/weather-app"
        web="https://weather-app-five-mocha.vercel.app/"
        image={weatherapp}
      />
      <Card
        name="Foodieland"
        github="https://github.com/martincrisdarr/foodieland"
        web="https://foodieland-ten.vercel.app/"
        image={foodieland}
      />
      <Card
        name="Logistic Landing"
        github="https://github.com/martincrisdarr/logistic"
        web="https://logistic-flame.vercel.app/"
        image={logistic}
      />
    </div>
  );
}

export default Works;
