import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import Save from './save';

registerBlockType('blocks-course/latest-posts', {
	edit: Edit,
	save: Save
});
