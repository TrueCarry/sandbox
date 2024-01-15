import type { Executor } from '../executor/Executor'
import { type BlockchainConfig, BlockchainBase } from './BlockchainBase'
import { BlockchainStorage, LocalBlockchainStorage } from './BlockchainStorage'

export class BlockchainSync extends BlockchainBase {
    static async create(opts?: { config?: BlockchainConfig, storage?: BlockchainStorage, executor?: Executor }) {
        const executor = opts?.executor ?? await (await import('../executor/Executor')).Executor.create()
        return new BlockchainSync({
            executor,
            storage: opts?.storage ?? new LocalBlockchainStorage(),
            ...opts
        })
    }
}
