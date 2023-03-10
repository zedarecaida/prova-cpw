import { Alpha, Blue, Green, Red, ViewPanel } from './styles'

type ColorProps = {
  red: number
  green: number
  blue: number
  alpha: number
}

const Color = ({ red, green, blue, alpha }: ColorProps) => (
  <ViewPanel
    style={{ backgroundColor: `rgba(${red}, ${green}, ${blue}, ${alpha})` }}
  />
)

export default Color
