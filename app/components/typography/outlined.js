"use client"
import styled from "@emotion/styled";

/*
style={outlineColor ? {
            color: "#060410",
            textShadow: `-1px -1px 0 ${outlineColor}, 0 -1px 0 ${outlineColor}, 1px -1px 0 ${outlineColor}, 1px  0   0 ${outlineColor}, 1px  1px 0 ${outlineColor}, 0    1px 0 ${outlineColor}, -1px  1px 0 ${outlineColor}, -1px  0   0 ${outlineColor}`
          } : {}}>
 */

const Outlined = styled.span`
  font: inherit;
  text-decoration: inherit;
  color: ${props => !props.filled ? "#060410" : props.color || "#fefefe"};
  text-shadow: -1px -1px 0 ${props => props.outlineColor || "#fefefe"}, 0 -1px 0 ${props => props.outlineColor || "#fefefe"}, 1px -1px 0 ${props => props.outlineColor || "#fefefe"}, 1px 0 0 ${props => props.outlineColor || "#fefefe"}, 1px 1px 0 ${props => props.outlineColor || "#fefefe"}, 0 1px 0 ${props => props.outlineColor || "#fefefe"}, -1px 1px 0 ${props => props.outlineColor || "#fefefe"}, -1px 0 0 ${props => props.outlineColor || "#fefefe"};
`

export default Outlined;