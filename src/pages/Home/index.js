import img from "../../assets/img.jpeg";

import { Button } from '../../components/button';
import { Card } from "../../components/card";

import Avatar from "../../components/Avatar";
import { Counter } from "../../components/Counter";


const Home = () => {
    return (
        <div>
    
          <Button label="Clique"></Button>

          <Avatar.Cover background={img}/>
    
          <Card label="le titre" icon={img} iconPosition="right" background={img}/>
          <Counter/>
        </div>
      );
};
export default Home;
