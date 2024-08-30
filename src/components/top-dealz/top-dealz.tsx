import classNames from 'classnames';
import styles from './top-dealz.module.scss';
import { Card } from '../card/card';
import ItalianPng from '../../assets/italian.png';
import Pasta3Png from '../../assets/pasta3.png';
import SaladPng from '../../assets/salad.png';
import Pasta2Png from '../../assets/pasta2.png';
import ShakePng from '../../assets/shake.png';

export interface TopDealzProps {
    className?: string;
}

export const TopDealz = ({ className }: TopDealzProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.container}>
                <h2 className={styles.header1}>today&apos;s top deals</h2>
                <div className={styles.cards}>
                    <Card imageUrl={ItalianPng}>Spagetti</Card>
                    <Card imageUrl={Pasta3Png}>Pasta</Card>
                    <Card imageUrl={SaladPng}>Salad</Card>
                    <Card imageUrl={Pasta2Png}>Pad Thai</Card>
                    <Card imageUrl={ShakePng}>Smoothie</Card>
                </div>
            </div>
        </div>
    );
};
