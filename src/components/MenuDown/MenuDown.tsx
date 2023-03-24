/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import VectorImage from 'src/assets/images/menudown_Vector.png';
import { styled } from '@mui/material/styles';
import { MenuDownProps } from 'src/types';

const MenuDown1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `24px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const Vector: any = styled('img')({
  height: `5px`,
  width: `10px`,
  position: `absolute`,
  left: `7px`,
  top: `10px`,
});

function MenuDown(props: MenuDownProps): JSX.Element {
  return (
    <MenuDown1 className={props.className}>
      <Vector src={VectorImage} loading="lazy" alt={'Vector'} />
    </MenuDown1>
  );
}

export default MenuDown;