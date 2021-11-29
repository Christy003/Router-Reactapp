import About  from '../Pages/About';
import Text from '../Components/Text';
import { shallow } from "enzyme";
describe('Parent Component', () => {
    it('renders Child component', () => {
      const wrapper = shallow(<About/>);
      expect(wrapper.find(Text)).toHaveLength(1);
    });
  });