import React from 'react';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavbarItem from './NavbarItem';
import Navbar from '../Navbar Compoment/NavbarItem'
configure({ adapter: new Adapter() });
describe('<Navbar/>', () => {
  it('should render correctly Navbar component', () => {  
    const wrapper = shallow(<NavbarItem />);
    expect(wrapper.find(<Navbar/>)).toHaveLength(0);
});
});
