import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Box, Text } from "../n0x.Bass";

const Tier = class extends PureComponent {
  render() {
    const {
      title,
      price,
      length,
      desc,
      boxWidth,
      boxBg,
      boxAlign,
      boxMargin,
      boxMarginX,
      boxMarginY,
      boxMarginT,
      boxMarginB,
      boxPad,
      boxPadX,
      boxPadY,
      boxPadT,
      boxPadB,
      textAlign,
      titleSize,
      titleWeight,
      titleColor,
      titleMargin,
      titleMarginX,
      titleMarginY,
      titlePad,
      titlePadX,
      titlePadY,
      titlePadT,
      titlePadB,
      priceSize,
      priceWeight,
      priceColor,
      priceMargin,
      priceMarginX,
      priceMarginY,
      pricePad,
      pricePadX,
      pricePadY,
      pricePadT,
      pricePadB,
      lengthSize,
      lengthWeight,
      lengthColor,
      lengthMargin,
      lengthMarginX,
      lengthMarginY,
      lengthPad,
      lengthPadX,
      lengthPadY,
      lengthPadT,
      lengthPadB,
      descSize,
      descWeight,
      descColor,
      descMargin,
      descMarginX,
      descMarginY,
      descPad,
      descPadX,
      descPadY,
      descPadT,
      descPadB
    } = this.props;
    return (
      <Box
        width={boxWidth}
        bg={boxBg}
        alignSelf={boxAlign}
        m={boxMargin}
        mx={boxMarginX}
        my={boxMarginY}
        mt={boxMarginT}
        mb={boxMarginB}
        p={boxPad}
        px={boxPadX}
        py={boxPadY}
        pt={boxPadT}
        pb={boxPadB}
      >
        <Text
          textAlign={textAlign}
          fontSize={titleSize}
          fontWeight={titleWeight}
          color={titleColor}
          m={titleMargin}
          mx={titleMarginX}
          my={titleMarginY}
          p={titlePad}
          px={titlePadX}
          py={titlePadY}
          pt={titlePadT}
          pb={titlePadB}
        >
          {title}
        </Text>

        <Text
          textAlign={textAlign}
          fontSize={priceSize}
          fontWeight={priceWeight}
          color={priceColor}
          m={priceMargin}
          mx={priceMarginX}
          my={priceMarginY}
          p={pricePad}
          px={pricePadX}
          py={pricePadY}
          pt={pricePadT}
          pb={pricePadB}
        >
          {price}
        </Text>
        <Text
          textAlign={textAlign}
          fontSize={lengthSize}
          fontWeight={lengthWeight}
          color={lengthColor}
          m={lengthMargin}
          mx={lengthMarginX}
          my={lengthMarginY}
          p={lengthPad}
          px={lengthPadX}
          py={lengthPadY}
          pt={lengthPadT}
          pb={lengthPadB}
        >
          {length}
        </Text>

        <Text
          textAlign={textAlign}
          fontSize={descSize}
          fontWeight={descWeight}
          color={descColor}
          m={descMargin}
          mx={descMarginX}
          my={descMarginY}
          p={descPad}
          px={descPadX}
          py={descPadY}
          pt={descPadT}
          pb={descPadB}
        >
          {desc}
        </Text>
      </Box>
    );
  }
};

Tier.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  length: PropTypes.string,
  desc: PropTypes.string,
  boxWidth: PropTypes.arrayOf( PropTypes.number ),
  boxBg: PropTypes.string,
  boxAlign: PropTypes.string,
  boxMargin: PropTypes.arrayOf( PropTypes.number ),
  boxMarginX: PropTypes.arrayOf( PropTypes.number ),
  boxMarginY: PropTypes.arrayOf( PropTypes.number ),
  boxMarginT: PropTypes.arrayOf( PropTypes.number ),
  boxMarginB: PropTypes.arrayOf( PropTypes.number ),
  boxPad: PropTypes.arrayOf( PropTypes.number ),
  boxPadX: PropTypes.arrayOf( PropTypes.number ),
  boxPadY: PropTypes.arrayOf( PropTypes.number ),
  boxPadT: PropTypes.arrayOf( PropTypes.number ),
  boxPadB: PropTypes.arrayOf( PropTypes.number ),
  textAlign: PropTypes.string,
  titleSize: PropTypes.arrayOf( PropTypes.number ),
  titleWeight: PropTypes.string,
  titleColor: PropTypes.string,
  titleMargin: PropTypes.arrayOf( PropTypes.number ),
  titleMarginX: PropTypes.arrayOf( PropTypes.number ),
  titleMarginY: PropTypes.arrayOf( PropTypes.number ),
  titlePad: PropTypes.arrayOf( PropTypes.number ),
  titlePadX: PropTypes.arrayOf( PropTypes.number ),
  titlePadY: PropTypes.arrayOf( PropTypes.number ),
  titlePadT: PropTypes.arrayOf( PropTypes.number ),
  titlePadB: PropTypes.arrayOf( PropTypes.number ),
  priceSize: PropTypes.arrayOf( PropTypes.number ),
  priceWeight: PropTypes.string,
  priceColor: PropTypes.string,
  priceMargin: PropTypes.arrayOf( PropTypes.number ),
  priceMarginX: PropTypes.arrayOf( PropTypes.number ),
  priceMarginY: PropTypes.arrayOf( PropTypes.number ),
  pricePad: PropTypes.arrayOf( PropTypes.number ),
  pricePadX: PropTypes.arrayOf( PropTypes.number ),
  pricePadY: PropTypes.arrayOf( PropTypes.number ),
  pricePadT: PropTypes.arrayOf( PropTypes.number ),
  pricePadB: PropTypes.arrayOf( PropTypes.number ),
  lengthSize: PropTypes.arrayOf( PropTypes.number ),
  lengthWeight: PropTypes.string,
  lengthColor: PropTypes.string,
  lengthMargin: PropTypes.arrayOf( PropTypes.number ),
  lengthMarginX: PropTypes.arrayOf( PropTypes.number ),
  lengthMarginY: PropTypes.arrayOf( PropTypes.number ),
  lengthPad: PropTypes.arrayOf( PropTypes.number ),
  lengthPadX: PropTypes.arrayOf( PropTypes.number ),
  lengthPadY: PropTypes.arrayOf( PropTypes.number ),
  lengthPadT: PropTypes.arrayOf( PropTypes.number ),
  lengthPadB: PropTypes.arrayOf( PropTypes.number ),
  descSize: PropTypes.arrayOf( PropTypes.number ),
  descWeight: PropTypes.string,
  descColor: PropTypes.string,
  descMargin: PropTypes.arrayOf( PropTypes.number ),
  descMarginX: PropTypes.arrayOf( PropTypes.number ),
  descMarginY: PropTypes.arrayOf( PropTypes.number ),
  descPad: PropTypes.arrayOf( PropTypes.number ),
  descPadX: PropTypes.arrayOf( PropTypes.number ),
  descPadY: PropTypes.arrayOf( PropTypes.number ),
  descPadT: PropTypes.arrayOf( PropTypes.number ),
  descPadB: PropTypes.arrayOf( PropTypes.number )
};

Tier.defaultProps = {
  title: '',
  price: '',
  length: '',
  desc: '',
  boxWidth: '',
  boxBg: '',
  boxAlign: '',
  boxMargin: '',
  boxMarginX: '',
  boxMarginY: '',
  boxMarginT: '',
  boxMarginB: '',
  boxPad: '',
  boxPadX: '',
  boxPadY: '',
  boxPadT: '',
  boxPadB: '',
  textAlign: '',
  titleSize: '',
  titleWeight: '',
  titleColor: '',
  titleMargin: '',
  titleMarginX: '',
  titleMarginY: '',
  titlePad: '',
  titlePadX: '',
  titlePadY: '',
  titlePadT: '',
  titlePadB: '',
  priceSize: '',
  priceWeight: '',
  priceColor: '',
  priceMargin: '',
  priceMarginX: '',
  priceMarginY: '',
  pricePad: '',
  pricePadX: '',
  pricePadY: '',
  pricePadT: '',
  pricePadB: '',
  lengthSize: '',
  lengthWeight: '',
  lengthColor: '',
  lengthMargin: '',
  lengthMarginX: '',
  lengthMarginY: '',
  lengthPad: '',
  lengthPadX: '',
  lengthPadY: '',
  lengthPadT: '',
  lengthPadB: '',
  descSize: '',
  descWeight: '',
  descColor: '',
  descMargin: '',
  descMarginX: '',
  descMarginY: '',
  descPad: '',
  descPadX: '',
  descPadY: '',
  descPadT: '',
  descPadB: ''
};

export {Tier};
