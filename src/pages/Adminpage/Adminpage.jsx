import React from 'react';
import {
  AdminLogo,
  AdminNav,
  GridArea,
  Heading,
  LeftSideBar,
  MainBody,
  RightSideBar,
  SideLink,
} from './Admin.elements';
import img from '../../logos/Group 1329.png';
import { Link } from 'react-router-dom';
import DataGrid from '../../components/DataGrid/DataGrid';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { useState } from 'react';
import AddingForm from '../../components/AddingForm/AddingForm';

const Adminpage = () => {
  const [active, setActive] = useState(1);

  const stateChange = (menuIndex) => {
    setActive(menuIndex);
  };

  const activeClass = {
    color: '#4e99f1',
  };

  return (
    <main>
      <AdminNav>
        <Link to='/'>
          <AdminLogo src={img} />
        </Link>
        <Heading>
          <h3>Volunteer register list</h3>
        </Heading>
      </AdminNav>

      <MainBody>
        <LeftSideBar>
          <SideLink
            style={active === 1 ? activeClass : null}
            onClick={() => stateChange(1)}
          >
            <PeopleAltIcon /> Volunteer register list
          </SideLink>
          <SideLink
            style={active === 2 ? activeClass : null}
            onClick={() => stateChange(2)}
          >
            <AddCircleOutlineIcon />
            Add events
          </SideLink>
        </LeftSideBar>
        <RightSideBar>
          <GridArea>{active === 1 ? <DataGrid /> : <AddingForm />} </GridArea>
        </RightSideBar>
      </MainBody>
    </main>
  );
};

export default Adminpage;
