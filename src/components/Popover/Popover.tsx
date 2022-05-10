import React, { useState } from 'react';
import styled from 'styled-components';

interface PopoverProps {
  children: React.ReactNode;
  content: string;
  title: string;
  text?: string;
  placement?: 'left' | 'right'
  trigger?: 'hover' | 'click'
}

const Popover = ({ children, placement = 'left', trigger = 'hover', content, title }: PopoverProps) => {
  const [open, setOpen] = useState(false)
  const onClickHandler = () => {
    if (trigger === 'click') setOpen(!open)
  }
  return (
    <Wrapper onMouseLeave={() => trigger === 'hover' && setOpen(false)}>
      <Overlay className={`${open && 'popover-open'}`} placement={placement}>
        <OverlayTitle>{title}</OverlayTitle>
        <OverlayContent>{content}</OverlayContent>
      </Overlay>
      <Handler onClick={onClickHandler} onMouseOver={() => trigger === 'hover' && setOpen(true)}>
        {children}
      </Handler>
    </Wrapper>
  );
};

export default Popover;

interface OverlayProps {
  placement: 'left' | 'right'
}
const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`
const Overlay = styled.div<OverlayProps>`
  position: absolute;
  left: ${props => props.placement === 'left' ? 'unset' : 'calc(100% + 10px)'};
  right: ${props => props.placement === 'right' ? 'unset' : 'calc(100% + 10px)'};
  border: solid 1px gray;
  display: none;
  background-color: white;
  min-width: 200px;
  &.popover-open {
    display: block;
  }
`
const Handler = styled.div`
  width: fit-content;
  padding: 5px 10px;
  height: 100%;
  border: solid 1px green;
`
const OverlayTitle = styled.div`
  padding: 10px 15px;
  border-bottom: solid 1px gray;
  text-align: left;
`
const OverlayContent = styled.div`
  padding: 10px 15px;
  text-align: left;
`