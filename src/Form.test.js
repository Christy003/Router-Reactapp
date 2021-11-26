import Form from './Pages/Form';
import Login from './Components/Login';
import { shallow } from "enzyme";
describe('Parent Component', () => {
    it('renders Child component', () => {
      const wrapper = shallow(<Form />);
      expect(wrapper.find(Login)).toHaveLength(1);
    });
  });