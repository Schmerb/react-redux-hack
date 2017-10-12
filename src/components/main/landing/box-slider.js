import React from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';

import Box from './box';

import { getCurrencies, getName } from 'utils/crypto-currency-list';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class BoxSlider extends React.Component {

	// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	// Slick-slider settings object
	// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	slickSliderInit() {
		const settings = {
			dots: true,
			arrows: true,
			infinite: false,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 500,
					settings: {
						arrows: false
					}
				}
			]
		};
		return settings;
	}


	render() {
		const settings = this.slickSliderInit();
		const sym = this.props.currencySym;
		const currencies = getCurrencies();
		const currencySlides = currencies.map((currency, key) => (
			<div key={key}>
				<Box currency={getName(currency)} 
					price={this.props[currency].price} 
					currencySym={sym} />
			</div>
		));

		return (
			<Slider {...settings}>
				{currencySlides}
			</Slider>
		);
	}
}

const mapStateToProps = state => ({
	"BTC": state.crypto.BTC,
    "ETH": state.crypto.ETH,
    "LTC": state.crypto.LTC,
    "XMR": state.crypto.XMR,
    "DASH": state.crypto.DASH,
    "DOGE": state.crypto.DOGE,
    "XRP": state.crypto.XRP,
	baseCurrency: state.display.currency,
	currencySym: state.display.currencySym
});

export default connect(mapStateToProps)(BoxSlider);