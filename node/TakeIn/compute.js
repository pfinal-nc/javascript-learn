class Container {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
        this.volume = length * width * height;
    }

    getRotations() {
        return [
            { length: this.length, width: this.width, height: this.height },
            { length: this.length, width: this.height, height: this.width },
            { length: this.width, width: this.length, height: this.height },
            { length: this.width, width: this.height, height: this.length },
            { length: this.height, width: this.length, height: this.width },
            { length: this.height, width: this.width, height: this.length }
        ];
    }
}

function canPlaceAtPosition(position, container, occupiedSpace, bigContainer) {
    const { x, y, z } = position;
    const { length, width, height } = container;

    if (x + length > bigContainer.length ||
        y + width > bigContainer.width ||
        z + height > bigContainer.height) {
        return false;
    }

    for (let i = x; i < x + length; i += 100) {
        for (let j = y; j < y + width; j += 100) {
            for (let k = z; k < z + height; k += 100) {
                if (occupiedSpace.has(`${i},${j},${k}`)) {
                    return false;
                }
            }
        }
    }

    return true;
}

function markSpaceAsOccupied(position, container, occupiedSpace) {
    const { x, y, z } = position;
    const { length, width, height } = container;

    for (let i = x; i < x + length; i += 100) {
        for (let j = y; j < y + width; j += 100) {
            for (let k = z; k < z + height; k += 100) {
                occupiedSpace.add(`${i},${j},${k}`);
            }
        }
    }
}

function unmarkSpaceAsOccupied(position, container, occupiedSpace) {
    const { x, y, z } = position;
    const { length, width, height } = container;

    for (let i = x; i < x + length; i += 100) {
        for (let j = y; j < y + width; j += 100) {
            for (let k = z; k < z + height; k += 100) {
                occupiedSpace.delete(`${i},${j},${k}`);
            }
        }
    }
}

function calculateMaxFit(bigContainer, smallContainer, occupiedSpace) {
    const positions = [];
    for (let rotation of smallContainer.getRotations()) {
        for (let x = 0; x <= bigContainer.length - rotation.length; x += 100) {
            for (let y = 0; y <= bigContainer.width - rotation.width; y += 100) {
                for (let z = 0; z <= bigContainer.height - rotation.height; z += 100) {
                    const position = { x, y, z };
                    if (canPlaceAtPosition(position, rotation, occupiedSpace, bigContainer)) {
                        positions.push({ position, rotation });
                        markSpaceAsOccupied(position, rotation, occupiedSpace);
                    }
                }
            }
        }
    }
    return positions;
}

function generateUniqueKey(container1Positions, container2Positions) {
    const key1 = container1Positions.map(pos => `${pos.x},${pos.y},${pos.z}`).sort().join('|');
    const key2 = container2Positions.map(pos => `${pos.x},${pos.y},${pos.z}`).sort().join('|');
    return `${key1}||${key2}`;
}

function tryCombination(bigContainer, smallContainer1, smallContainer2) {
    const placements = [];
    const uniqueKeys = new Set();

    const container1Rotations = smallContainer1.getRotations();
    const container2Rotations = smallContainer2.getRotations();

    for (let c1Rot of container1Rotations) {
        for (let c2Rot of container2Rotations) {
            let occupiedSpace = new Set();

            // 尝试只放容器1
            const container1Positions = calculateMaxFit(bigContainer, smallContainer1, occupiedSpace);

            // 尝试在放置容器1的基础上放容器2
            const container2Positions = calculateMaxFit(bigContainer, smallContainer2, occupiedSpace);

            if (container1Positions.length > 0 || container2Positions.length > 0) {
                const usedVolume = container1Positions.length * smallContainer1.volume +
                                   container2Positions.length * smallContainer2.volume;
                const usageRate = (usedVolume / bigContainer.volume) * 100;

                const key = generateUniqueKey(container1Positions.map(p => p.position), container2Positions.map(p => p.position));
                if (!uniqueKeys.has(key)) {
                    uniqueKeys.add(key);
                    placements.push({
                        container1Count: container1Positions.length,
                        container2Count: container2Positions.length,
                        container1Positions: container1Positions.map(pos => pos.position),
                        container2Positions: container2Positions.map(pos => pos.position),
                        usedVolume: usedVolume,
                        usageRate: isFinite(usageRate) ? usageRate.toFixed(2) : '0.00',
                    });
                }
            }
        }
    }

    // 尝试混合放置容器1和容器2
    for (let c1Rot of container1Rotations) {
        for (let c2Rot of container2Rotations) {
            let occupiedSpace = new Set();

            for (let x1 = 0; x1 <= bigContainer.length - c1Rot.length; x1 += 100) {
                for (let y1 = 0; y1 <= bigContainer.width - c1Rot.width; y1 += 100) {
                    for (let z1 = 0; z1 <= bigContainer.height - c1Rot.height; z1 += 100) {
                        const pos1 = { x: x1, y: y1, z: z1 };
                        if (canPlaceAtPosition(pos1, c1Rot, occupiedSpace, bigContainer)) {
                            markSpaceAsOccupied(pos1, c1Rot, occupiedSpace);

                            for (let x2 = 0; x2 <= bigContainer.length - c2Rot.length; x2 += 100) {
                                for (let y2 = 0; y2 <= bigContainer.width - c2Rot.width; y2 += 100) {
                                    for (let z2 = 0; z2 <= bigContainer.height - c2Rot.height; z2 += 100) {
                                        const pos2 = { x: x2, y: y2, z: z2 };
                                        if (canPlaceAtPosition(pos2, c2Rot, occupiedSpace, bigContainer)) {
                                            const usedVolume = c1Rot.volume + c2Rot.volume;
                                            const usageRate = (usedVolume / bigContainer.volume) * 100;

                                            const keyMixed = generateUniqueKey([pos1], [pos2]);
                                            if (!uniqueKeys.has(keyMixed)) {
                                                uniqueKeys.add(keyMixed);
                                                placements.push({
                                                    container1Count: 1,
                                                    container2Count: 1,
                                                    container1Positions: [pos1],
                                                    container2Positions: [pos2],
                                                    usedVolume: usedVolume,
                                                    usageRate: isFinite(usageRate) ? usageRate.toFixed(2) : '0.00',
                                                });
                                            }
                                        }
                                    }
                                }
                            }
                            unmarkSpaceAsOccupied(pos1, c1Rot, occupiedSpace); // 退回到原始状态
                        }
                    }
                }
            }
        }
    }

    // 按使用率从大到小排序
    placements.sort((a, b) => b.usageRate - a.usageRate);

    return placements;
}

// 定义大容器的尺寸
const bigContainer = new Container(3000, 3000, 3000);

// 定义两个小容器的尺寸
const smallContainer1 = new Container(2000, 2000, 1000);
const smallContainer2 = new Container(1000, 1000, 1500);

// 计算放置方案
const placements = tryCombination(bigContainer, smallContainer1, smallContainer2);

if (placements.length > 0) {
    console.log(`找到 ${placements.length} 种放置方案:`);
    placements.forEach((placement, index) => {
        console.log(`方案 ${index + 1}:`);
        console.log(`容器1个数: ${placement.container1Count}`);
        console.log("容器1坐标: ");
        placement.container1Positions.slice(0, 10).forEach((pos, idx) => {
            console.log(`  容器1 [${idx + 1}] 坐标: (${pos.x}, ${pos.y}, ${pos.z})`);
        });
        console.log(`...(总计 ${placement.container1Count} 个)`);

        console.log(`容器2个数: ${placement.container2Count}`);
        console.log("容器2坐标: ");
        placement.container2Positions.slice(0, 10).forEach((pos, idx) => {
            console.log(`  容器2 [${idx + 1}] 坐标: (${pos.x}, ${pos.y}, ${pos.z})`);
        });
        console.log(`...(总计 ${placement.container2Count} 个)`);

        console.log(`空间使用率: ${placement.usageRate}%`);
    });
} else {
    console.log("没有找到合适的放置方案。");
}
