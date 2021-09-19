/** @jsxImportSource theme-ui */
import React from 'react';

const Avatar: React.FC<{
	size?: string;
	minWidth?: string;
	minHeight?: string;
	name?: string;
	src?: string;
	bgColor?: string;
}> = ({ size = '32px', src, name, minWidth = '32px', minHeight = '32px' }) => {
	return (
		<li
			sx={{
				listStyle: 'none',
				borderRadius: '50%',
				overflow: 'hidden',
				width: size,
				height: size,
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
				<NamePlaceholder name={name || 'default'} />
				{src && name && <Image src={src} alt={name} />}

				{!src && !name && (
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

const getFirstAndLastCharacter = (name: string) => {
	return name.split(' ').map(el => el[0].toUpperCase());
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
			}}>
			{name && getFirstAndLastCharacter(name)}
		</div>
	);
};

export { Avatar };
