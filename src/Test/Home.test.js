import Home from '../Pages/Home';
import Text from '../Components/Text';
import { shallow } from "enzyme";
describe('Parent Component', () => {
    it('renders Child component', () => {
      const wrapper = shallow(<Home/>);
      expect(wrapper.find(Text)).toHaveLength(1);
    });
  });