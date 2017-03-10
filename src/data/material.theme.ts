import { Theme } from '../types/theme';

const MaterialTheme: Theme = {
	id: 'material',
	name: 'Material Design',
	hues: [
		{
			id: 'red',
			name: 'Red',
			primary: '#F44336',
			shades: [
				{ name: '50', colour: '#FFEBEE', white_ink: false },
				{ name: '100', colour: '#FFCDD2', white_ink: false },
				{ name: '200', colour: '#EF9A9A', white_ink: false },
				{ name: '300', colour: '#E57373', white_ink: false },
				{ name: '400', colour: '#EF5350', white_ink: true },
				{ name: '500', colour: '#F44336', white_ink: true },
				{ name: '600', colour: '#E53935', white_ink: true },
				{ name: '700', colour: '#D32F2F', white_ink: true },
				{ name: '800', colour: '#C62828', white_ink: true },
				{ name: '900', colour: '#B71C1C', white_ink: true },
				{ name: 'A100', colour: '#FF8A80', white_ink: false },
				{ name: 'A200', colour: '#FF5252', white_ink: true },
				{ name: 'A400', colour: '#FF1744', white_ink: true },
				{ name: 'A700', colour: '#D50000', white_ink: true },
			]
		},
		{
			id: 'pink',
			name: 'Pink',
			primary: '#E91E63',
			shades: [
				{ name: '50', colour: '#FCE4EC', white_ink: false },
				{ name: '100', colour: '#F8BBD0', white_ink: false },
				{ name: '200', colour: '#F48FB1', white_ink: false },
				{ name: '300', colour: '#F06292', white_ink: true },
				{ name: '400', colour: '#EC407A', white_ink: true },
				{ name: '500', colour: '#E91E63', white_ink: true },
				{ name: '600', colour: '#D81B60', white_ink: true },
				{ name: '700', colour: '#C2185B', white_ink: true },
				{ name: '800', colour: '#AD1457', white_ink: true },
				{ name: '900', colour: '#880E4F', white_ink: true },
				{ name: 'A100', colour: '#FF80AB', white_ink: false },
				{ name: 'A200', colour: '#FF4081', white_ink: true },
				{ name: 'A400', colour: '#F50057', white_ink: true },
				{ name: 'A700', colour: '#C51162', white_ink: true },
			]
		},
		{
			id: 'purple',
			name: 'Purple',
			primary: '#9C27B0',
			shades: [
				{ name: '50', colour: '#F3E5F5', white_ink: false },
				{ name: '100', colour: '#E1BEE7', white_ink: false },
				{ name: '200', colour: '#CE93D8', white_ink: false },
				{ name: '300', colour: '#BA68C8', white_ink: true },
				{ name: '400', colour: '#AB47BC', white_ink: true },
				{ name: '500', colour: '#9C27B0', white_ink: true },
				{ name: '600', colour: '#8E24AA', white_ink: true },
				{ name: '700', colour: '#7B1FA2', white_ink: true },
				{ name: '800', colour: '#6A1B9A', white_ink: true },
				{ name: '900', colour: '#4A148C', white_ink: true },
				{ name: 'A100', colour: '#EA80FC', white_ink: false },
				{ name: 'A200', colour: '#E040FB', white_ink: true },
				{ name: 'A400', colour: '#D500F9', white_ink: true },
				{ name: 'A700', colour: '#AA00FF', white_ink: true },
			]
		},
		{
			id: 'deepPurple',
			name: 'Deep Purple',
			primary: '#673AB7',
			shades: [
				{ name: '50', colour: '#EDE7F6', white_ink: false },
				{ name: '100', colour: '#D1C4E9', white_ink: false },
				{ name: '200', colour: '#B39DDB', white_ink: false },
				{ name: '300', colour: '#9575CD', white_ink: true },
				{ name: '400', colour: '#7E57C2', white_ink: true },
				{ name: '500', colour: '#673AB7', white_ink: true },
				{ name: '600', colour: '#5E35B1', white_ink: true },
				{ name: '700', colour: '#512DA8', white_ink: true },
				{ name: '800', colour: '#4527A0', white_ink: true },
				{ name: '900', colour: '#311B92', white_ink: true },
				{ name: 'A100', colour: '#B388FF', white_ink: false },
				{ name: 'A200', colour: '#7C4DFF', white_ink: true },
				{ name: 'A400', colour: '#651FFF', white_ink: true },
				{ name: 'A700', colour: '#6200EA', white_ink: true },
			]
		},
		{
			id: 'indigo',
			name: 'Indigo',
			primary: '#3F51B5',
			shades: [
				{ name: '50', colour: '#E8EAF6', white_ink: false },
				{ name: '100', colour: '#C5CAE9', white_ink: false },
				{ name: '200', colour: '#9FA8DA', white_ink: false },
				{ name: '300', colour: '#7986CB', white_ink: true },
				{ name: '400', colour: '#5C6BC0', white_ink: true },
				{ name: '500', colour: '#3F51B5', white_ink: true },
				{ name: '600', colour: '#3949AB', white_ink: true },
				{ name: '700', colour: '#303F9F', white_ink: true },
				{ name: '800', colour: '#283593', white_ink: true },
				{ name: '900', colour: '#1A237E', white_ink: true },
				{ name: 'A100', colour: '#8C9EFF', white_ink: false },
				{ name: 'A200', colour: '#536DFE', white_ink: true },
				{ name: 'A400', colour: '#3D5AFE', white_ink: true },
				{ name: 'A700', colour: '#304FFE', white_ink: true },
			]
		},
		{
			id: 'blue',
			name: 'Blue',
			primary: '#2196F3',
			shades: [
				{ name: '50', colour: '#E3F2FD', white_ink: false },
				{ name: '100', colour: '#BBDEFB', white_ink: false },
				{ name: '200', colour: '#90CAF9', white_ink: false },
				{ name: '300', colour: '#64B5F6', white_ink: false },
				{ name: '400', colour: '#42A5F5', white_ink: false },
				{ name: '500', colour: '#2196F3', white_ink: true },
				{ name: '600', colour: '#1E88E5', white_ink: true },
				{ name: '700', colour: '#1976D2', white_ink: true },
				{ name: '800', colour: '#1565C0', white_ink: true },
				{ name: '900', colour: '#0D47A1', white_ink: true },
				{ name: 'A100', colour: '#82B1FF', white_ink: false },
				{ name: 'A200', colour: '#448AFF', white_ink: true },
				{ name: 'A400', colour: '#2979FF', white_ink: true },
				{ name: 'A700', colour: '#2962FF', white_ink: true },
			]
		},
		{
			id: 'lightBlue',
			name: 'Light Blue',
			primary: '#03A9F4',
			shades: [
				{ name: '50', colour: '#E1F5FE', white_ink: false },
				{ name: '100', colour: '#B3E5FC', white_ink: false },
				{ name: '200', colour: '#81D4FA', white_ink: false },
				{ name: '300', colour: '#4FC3F7', white_ink: false },
				{ name: '400', colour: '#29B6F6', white_ink: false },
				{ name: '500', colour: '#03A9F4', white_ink: false },
				{ name: '600', colour: '#039BE5', white_ink: true },
				{ name: '700', colour: '#0288D1', white_ink: true },
				{ name: '800', colour: '#0277BD', white_ink: true },
				{ name: '900', colour: '#01579B', white_ink: true },
				{ name: 'A100', colour: '#80D8FF', white_ink: false },
				{ name: 'A200', colour: '#40C4FF', white_ink: false },
				{ name: 'A400', colour: '#00B0FF', white_ink: false },
				{ name: 'A700', colour: '#0091EA', white_ink: true },
			]
		},
		{
			id: 'cyan',
			name: 'Cyan',
			primary: '#00BCD4',
			shades: [
				{ name: '50', colour: '#E0F7FA', white_ink: false },
				{ name: '100', colour: '#B2EBF2', white_ink: false },
				{ name: '200', colour: '#80DEEA', white_ink: false },
				{ name: '300', colour: '#4DD0E1', white_ink: false },
				{ name: '400', colour: '#26C6DA', white_ink: false },
				{ name: '500', colour: '#00BCD4', white_ink: false },
				{ name: '600', colour: '#00ACC1', white_ink: false },
				{ name: '700', colour: '#0097A7', white_ink: true },
				{ name: '800', colour: '#00838F', white_ink: true },
				{ name: '900', colour: '#006064', white_ink: true },
				{ name: 'A100', colour: '#84FFFF', white_ink: false },
				{ name: 'A200', colour: '#18FFFF', white_ink: false },
				{ name: 'A400', colour: '#00E5FF', white_ink: false },
				{ name: 'A700', colour: '#00B8D4', white_ink: false },
			]
		},
		{
			id: 'teal',
			name: 'Teal',
			primary: '#009688',
			shades: [
				{ name: '50', colour: '#E0F2F1', white_ink: false },
				{ name: '100', colour: '#B2DFDB', white_ink: false },
				{ name: '200', colour: '#80CBC4', white_ink: false },
				{ name: '300', colour: '#4DB6AC', white_ink: false },
				{ name: '400', colour: '#26A69A', white_ink: false },
				{ name: '500', colour: '#009688', white_ink: true },
				{ name: '600', colour: '#00897B', white_ink: true },
				{ name: '700', colour: '#00796B', white_ink: true },
				{ name: '800', colour: '#00695C', white_ink: true },
				{ name: '900', colour: '#004D40', white_ink: true },
				{ name: 'A100', colour: '#A7FFEB', white_ink: false },
				{ name: 'A200', colour: '#64FFDA', white_ink: false },
				{ name: 'A400', colour: '#1DE9B6', white_ink: false },
				{ name: 'A700', colour: '#00BFA5', white_ink: false },
			]
		},
		{
			id: 'green',
			name: 'Green',
			primary: '#4CAF50',
			shades: [
				{ name: '50', colour: '#E8F5E9', white_ink: false },
				{ name: '100', colour: '#C8E6C9', white_ink: false },
				{ name: '200', colour: '#A5D6A7', white_ink: false },
				{ name: '300', colour: '#81C784', white_ink: false },
				{ name: '400', colour: '#66BB6A', white_ink: false },
				{ name: '500', colour: '#4CAF50', white_ink: false },
				{ name: '600', colour: '#43A047', white_ink: true },
				{ name: '700', colour: '#388E3C', white_ink: true },
				{ name: '800', colour: '#2E7D32', white_ink: true },
				{ name: '900', colour: '#1B5E20', white_ink: true },
				{ name: 'A100', colour: '#B9F6CA', white_ink: false },
				{ name: 'A200', colour: '#69F0AE', white_ink: false },
				{ name: 'A400', colour: '#00E676', white_ink: false },
				{ name: 'A700', colour: '#00C853', white_ink: false },
			]
		},
		{
			id: 'lightGreen',
			name: 'Light Green',
			primary: '#8BC34A',
			shades: [
				{ name: '50', colour: '#F1F8E9', white_ink: false },
				{ name: '100', colour: '#DCEDC8', white_ink: false },
				{ name: '200', colour: '#C5E1A5', white_ink: false },
				{ name: '300', colour: '#AED581', white_ink: false },
				{ name: '400', colour: '#9CCC65', white_ink: false },
				{ name: '500', colour: '#8BC34A', white_ink: false },
				{ name: '600', colour: '#7CB342', white_ink: false },
				{ name: '700', colour: '#689F38', white_ink: true },
				{ name: '800', colour: '#558B2F', white_ink: true },
				{ name: '900', colour: '#33691E', white_ink: true },
				{ name: 'A100', colour: '#CCFF90', white_ink: false },
				{ name: 'A200', colour: '#B2FF59', white_ink: false },
				{ name: 'A400', colour: '#76FF03', white_ink: false },
				{ name: 'A700', colour: '#64DD17', white_ink: false },
			]
		},
		{
			id: 'lime',
			name: 'Lime',
			primary: '#CDDC39',
			shades: [
				{ name: '50', colour: '#F9FBE7', white_ink: false },
				{ name: '100', colour: '#F0F4C3', white_ink: false },
				{ name: '200', colour: '#E6EE9C', white_ink: false },
				{ name: '300', colour: '#DCE775', white_ink: false },
				{ name: '400', colour: '#D4E157', white_ink: false },
				{ name: '500', colour: '#CDDC39', white_ink: false },
				{ name: '600', colour: '#C0CA33', white_ink: false },
				{ name: '700', colour: '#AFB42B', white_ink: false },
				{ name: '800', colour: '#9E9D24', white_ink: false },
				{ name: '900', colour: '#827717', white_ink: true },
				{ name: 'A100', colour: '#F4FF81', white_ink: false },
				{ name: 'A200', colour: '#EEFF41', white_ink: false },
				{ name: 'A400', colour: '#C6FF00', white_ink: false },
				{ name: 'A700', colour: '#AEEA00', white_ink: false },
			]
		},
		{
			id: 'yellow',
			name: 'Yellow',
			primary: '#FFEB3B',
			shades: [
				{ name: '50', colour: '#FFFDE7', white_ink: false },
				{ name: '100', colour: '#FFF9C4', white_ink: false },
				{ name: '200', colour: '#FFF59D', white_ink: false },
				{ name: '300', colour: '#FFF176', white_ink: false },
				{ name: '400', colour: '#FFEE58', white_ink: false },
				{ name: '500', colour: '#FFEB3B', white_ink: false },
				{ name: '600', colour: '#FDD835', white_ink: false },
				{ name: '700', colour: '#FBC02D', white_ink: false },
				{ name: '800', colour: '#F9A825', white_ink: false },
				{ name: '900', colour: '#F57F17', white_ink: false },
				{ name: 'A100', colour: '#FFFF8D', white_ink: false },
				{ name: 'A200', colour: '#FFFF00', white_ink: false },
				{ name: 'A400', colour: '#FFEA00', white_ink: false },
				{ name: 'A700', colour: '#FFD600', white_ink: false },
			]
		},
		{
			id: 'amber',
			name: 'Amber',
			primary: '#FFC107',
			shades: [
				{ name: '50', colour: '#FFF8E1', white_ink: false },
				{ name: '100', colour: '#FFECB3', white_ink: false },
				{ name: '200', colour: '#FFE082', white_ink: false },
				{ name: '300', colour: '#FFD54F', white_ink: false },
				{ name: '400', colour: '#FFCA28', white_ink: false },
				{ name: '500', colour: '#FFC107', white_ink: false },
				{ name: '600', colour: '#FFB300', white_ink: false },
				{ name: '700', colour: '#FFA000', white_ink: false },
				{ name: '800', colour: '#FF8F00', white_ink: false },
				{ name: '900', colour: '#FF6F00', white_ink: false },
				{ name: 'A100', colour: '#FFE57F', white_ink: false },
				{ name: 'A200', colour: '#FFD740', white_ink: false },
				{ name: 'A400', colour: '#FFC400', white_ink: false },
				{ name: 'A700', colour: '#FFAB00', white_ink: false },
			]
		},
		{
			id: 'orange',
			name: 'Orange',
			primary: '#FF9800',
			shades: [
				{ name: '50', colour: '#FFF3E0', white_ink: false },
				{ name: '100', colour: '#FFE0B2', white_ink: false },
				{ name: '200', colour: '#FFCC80', white_ink: false },
				{ name: '300', colour: '#FFB74D', white_ink: false },
				{ name: '400', colour: '#FFA726', white_ink: false },
				{ name: '500', colour: '#FF9800', white_ink: false },
				{ name: '600', colour: '#FB8C00', white_ink: false },
				{ name: '700', colour: '#F57C00', white_ink: false },
				{ name: '800', colour: '#EF6C00', white_ink: true },
				{ name: '900', colour: '#E65100', white_ink: true },
				{ name: 'A100', colour: '#FFD180', white_ink: false },
				{ name: 'A200', colour: '#FFAB40', white_ink: false },
				{ name: 'A400', colour: '#FF9100', white_ink: false },
				{ name: 'A700', colour: '#FF6D00', white_ink: false },
			]
		},
		{
			id: 'deepOrange',
			name: 'Deep Orange',
			primary: '#FF5722',
			shades: [
				{ name: '50', colour: '#FBE9E7', white_ink: false },
				{ name: '100', colour: '#FFCCBC', white_ink: false },
				{ name: '200', colour: '#FFAB91', white_ink: false },
				{ name: '300', colour: '#FF8A65', white_ink: false },
				{ name: '400', colour: '#FF7043', white_ink: false },
				{ name: '500', colour: '#FF5722', white_ink: true },
				{ name: '600', colour: '#F4511E', white_ink: true },
				{ name: '700', colour: '#E64A19', white_ink: true },
				{ name: '800', colour: '#D84315', white_ink: true },
				{ name: '900', colour: '#BF360C', white_ink: true },
				{ name: 'A100', colour: '#FF9E80', white_ink: false },
				{ name: 'A200', colour: '#FF6E40', white_ink: false },
				{ name: 'A400', colour: '#FF3D00', white_ink: true },
				{ name: 'A700', colour: '#DD2C00', white_ink: true },
			]
		},
		{
			id: 'brown',
			name: 'Brown',
			primary: '#795548',
			shades: [
				{ name: '50', colour: '#EFEBE9', white_ink: false },
				{ name: '100', colour: '#D7CCC8', white_ink: false },
				{ name: '200', colour: '#BCAAA4', white_ink: false },
				{ name: '300', colour: '#A1887F', white_ink: true },
				{ name: '400', colour: '#8D6E63', white_ink: true },
				{ name: '500', colour: '#795548', white_ink: true },
				{ name: '600', colour: '#6D4C41', white_ink: true },
				{ name: '700', colour: '#5D4037', white_ink: true },
				{ name: '800', colour: '#4E342E', white_ink: true },
				{ name: '900', colour: '#3E2723', white_ink: true },
			]
		},
		{
			id: 'grey',
			name: 'Grey',
			primary: '#9E9E9E',
			shades: [
				{ name: '50', colour: '#FAFAFA', white_ink: false },
				{ name: '100', colour: '#F5F5F5', white_ink: false },
				{ name: '200', colour: '#EEEEEE', white_ink: false },
				{ name: '300', colour: '#E0E0E0', white_ink: false },
				{ name: '400', colour: '#BDBDBD', white_ink: false },
				{ name: '500', colour: '#9E9E9E', white_ink: false },
				{ name: '600', colour: '#757575', white_ink: true },
				{ name: '700', colour: '#616161', white_ink: true },
				{ name: '800', colour: '#424242', white_ink: true },
				{ name: '900', colour: '#212121', white_ink: true },
			]
		},
		{
			id: 'blueGrey',
			name: 'Blue Grey',
			primary: '#607D8B',
			shades: [
				{ name: '50', colour: '#ECEFF1', white_ink: false },
				{ name: '100', colour: '#CFD8DC', white_ink: false },
				{ name: '200', colour: '#B0BEC5', white_ink: false },
				{ name: '300', colour: '#90A4AE', white_ink: false },
				{ name: '400', colour: '#78909C', white_ink: true },
				{ name: '500', colour: '#607D8B', white_ink: true },
				{ name: '600', colour: '#546E7A', white_ink: true },
				{ name: '700', colour: '#455A64', white_ink: true },
				{ name: '800', colour: '#37474F', white_ink: true },
				{ name: '900', colour: '#263238', white_ink: true },
			]
		}
	]
};

export default MaterialTheme;