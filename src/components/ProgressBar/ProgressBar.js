/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: { height: 8, padding: 0, radius: 4 },
  medium: { height: 12, padding: 0, radius: 4 },
  large: { height: 16, padding: 4, radius: 8 },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  let percent;
  if (value > 100) percent = 100;
  else if (value < 0) percent = 0;
  else percent = value;

  return (
    <Wrapper
      size={size}
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        "--padding": styles.padding + "px",
        "--radius": styles.radius + "px",
        "--height": styles.height + "px",
        "--percent": percent + "%",
      }}
    >
      <BarWrapper>
        <Bar />
      </BarWrapper>
    </Wrapper>
  );
};

const heights = { small: "8px", medium: "12px", large: "24px" };
const radius = { small: "4px", medium: "4px", large: "8px" };
const padding = { small: 0, medium: 0, large: "4px" };

const Wrapper = styled.div`
  border-radius: var(--radius);
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;
const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;
const Bar = styled.div`
  height: var(--height);
  width: var(--percent);
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
