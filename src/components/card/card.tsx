import classNames from 'classnames';
import styles from './card.module.scss';
import ItalianPng from '../../assets/italian.png';

export interface CardProps {
    imageUrl?: string;
    children?: React.ReactNode;
    className?: string;
}

export const Card = ({ imageUrl = ItalianPng, children = "super salad", className }: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <img src={imageUrl} alt="" className={styles.image} />
            </div>
            <div className={styles.content}>{children}</div>
        </div>
    );
};
