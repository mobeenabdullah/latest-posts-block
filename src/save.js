import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function Save() {
	return (
		<p {...useBlockProps.save()}>
			{__('Latest Posts – hello from the saved content!', 'latest-posts')}
		</p>
	);
}
