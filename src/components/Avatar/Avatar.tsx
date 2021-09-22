/** @jsxImportSource theme-ui */
import React from 'react';
import { useThemeUI } from 'theme-ui';

type ISize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const Avatar: React.FC<{
	size?: ISize;
	minWidth?: string;
	minHeight?: string;
	initials?: string;
	src?: string;
	bgColor?: string;
}> = ({ size, src, initials, minWidth, minHeight }) => {
	const { theme } = useThemeUI();

	return (
		<li
			sx={{
				listStyle: 'none',
				borderRadius: '50%',

				overflow: 'hidden',
				width: size && theme.avatar ? theme.avatar.sizes[size] : '32px',
				height: size && theme.avatar ? theme.avatar.sizes[size] : '32px',
				minWidth: minWidth,
				minHeight: minHeight,
			}}>
			<span
				sx={{
					position: 'relative',
					width: '100%',
					height: '100%',
					display: 'block',
				}}>
				<NamePlaceholder name={initials || 'default'} />
				{src && initials && <Image src={src} alt={initials} />}

				{!src && !initials && (
					<Image
						src='https://cdn.auth0.com/website/cosmos/avatar-user-default.svg'
						alt='default'
					/>
				)}
			</span>
		</li>
	);
};

const Image = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<img
			src={src}
			alt={alt}
			sx={{
				width: '100%',
				height: '100%',
				objectFit: 'cover',
				zIndex: 1,
			}}
		/>
	);
};

const NamePlaceholder = ({ name }: { name: string }) => {
	return (
		<div
			role='img'
			sx={{
				position: 'absolute',
				top: '0',
				left: '0',
				width: '100%',
				height: '100%',
				backgroundColor: 'avatar.bgColor',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				zIndex: -1,
				fontSize: '100%',
			}}>
			{name}
		</div>
	);
};

export { Avatar };
