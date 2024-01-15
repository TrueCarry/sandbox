import type { Executor } from '../executor/Executor'
import { type BlockchainConfig, BlockchainBase } from './BlockchainBase'
import { BlockchainStorage, LocalBlockchainStorage } from './BlockchainStorage'

export class BlockchainWithExecutor extends BlockchainBase {
    static async create(executor: Executor, opts?: { config?: BlockchainConfig, storage?: BlockchainStorage }) {
        return new BlockchainWithExecutor({
            executor,
            storage: opts?.storage ?? new LocalBlockchainStorage(),
            ...opts
        })
    }
}
