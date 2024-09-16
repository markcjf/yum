import classNames from 'classnames';
import styles from './card.module.scss';

export interface CardProps {
    className?: string;
}

export const Card = ({ className }: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
            />
            <div>Text</div>
        </div>
    );
};
