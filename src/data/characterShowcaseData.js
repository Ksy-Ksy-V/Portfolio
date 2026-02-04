export const CYCLE_DURATION_MS = 1200
export const DISPLAY_FRAME_WIDTH = 129
export const DISPLAY_FRAME_HEIGHT = 129

export const SPRITES = [
    {
        url: '/img/pixel/player.png',
        sheetWidth: 1080,
        sheetHeight: 774,
        rowDivisions: 12,
        frameHeight: 129,
        animations: [
            { row: 0, label: 'Running', frames: 8 },
            { row: 4, label: 'Sitting', frames: 8 },
            { row: 5, label: 'Attacked', frames: 12 },
        ],
    },
    {
        url: '/img/pixel/enemy_gost.png',
        sheetWidth: 198,
        sheetHeight: 33,
        rowDivisions: 6,
        frameHeight: 33,
        animations: [{ row: 0, label: 'Idle', frames: 6 }],
    },
    {
        url: '/img/pixel/enemy_spider_big.png',
        sheetWidth: 264,
        sheetHeight: 33,
        rowDivisions: 6,
        frameHeight: 33,
        animations: [{ row: 0, label: 'Crawl', frames: 6 }],
    },
    {
        url: '/img/pixel/enemy_fly.png',
        sheetWidth: 132,
        sheetHeight: 22,
        rowDivisions: 6,
        frameHeight: 22,
        animations: [{ row: 0, label: 'Idle', frames: 6 }],
    },
]
