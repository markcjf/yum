import { createBoard } from '@wixc3/react-board';
import { TopDealz } from '../../../components/top-dealz/top-dealz';

export default createBoard({
    name: 'TopDealz',
    Board: () => <TopDealz />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1294,
    },
});
