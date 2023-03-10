import { useState } from 'react';
import ColorPanel from './components/ColorPanel';
import { Button, ButtonPanel, ButtonText, Container ,ColorButton,ColorValueButton} from './styles';

const App = () => {
const [red, setRed] = useState(250);
const [green, setGreen] = useState(0);
const [blue, setBlue] = useState(0);
const [alpha, setAlpha] = useState(1);

const handleColorChange = (colorSetter: (value: number) => void) => (event: React.ChangeEvent<HTMLInputElement>) => {
colorSetter(Number(event.target.value));
};

return (
<Container>
<ColorPanel red={red} green={green} blue={blue} alpha={alpha} />
<ButtonPanel>
<Button data-cy="button-red" key="button-red">
<ButtonText>Red</ButtonText>
<input type="range" min={0} max={255} value={red} onChange={handleColorChange(setRed)} />
</Button>
<Button data-cy="button-green" key="button-green">
<ButtonText>Green</ButtonText>
<input type="range" min={0} max={255} value={green} onChange={handleColorChange(setGreen)} />
</Button>
<Button data-cy="button-blue" key="button-blue">
<ButtonText>Blue</ButtonText>
<input type="range" min={0} max={255} value={blue} onChange={handleColorChange(setBlue)} />
</Button>
<Button data-cy="button-alpha" key="button-alpha">
<ButtonText>Alpha</ButtonText>
<input type="range" min={0} max={1} step={0.1} value={alpha} onChange={handleColorChange(setAlpha)} />
</Button>
</ButtonPanel>
</Container>
);
};

export default App;