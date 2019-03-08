import React from 'react';
import {
  AccordionContainer,
  BlinkableHeaderContainer,
  ContentContainer
} from './style';

class Accordion extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isOpen: true,
      isHeaderBlinking: true,
    }
  }

  handleClick = () => {
    this.toggleAccordion();
    this.turnOffHeaderBlinking();
  }

  toggleAccordion = () => this.setState({ isOpen: !this.state.isOpen });
  turnOffHeaderBlinking = () => this.setState({ isHeaderBlinking: false });

  render() {
    const { header, content } = this.props;
    const { isOpen, isHeaderBlinking } = this.state;

    return(
      <AccordionContainer>
        <BlinkableHeaderContainer blink={isHeaderBlinking} onClick={this.handleClick}>
          {header}
        </BlinkableHeaderContainer>
        {isOpen && <ContentContainer>{content}</ContentContainer>}
      </AccordionContainer>
    )
  }
}

export default Accordion;
