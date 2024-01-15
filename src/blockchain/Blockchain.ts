import type { IExecutor } from '../executor/Executor'
import { type BlockchainConfig, BlockchainBase } from './BlockchainBase'
import { BlockchainStorage, LocalBlockchainStorage } from './BlockchainStorage'

export class Blockchain extends BlockchainBase {
    static async create(opts?: { config?: BlockchainConfig, storage?: BlockchainStorage, executor?: IExecutor }) {
        const executor = opts?.executor ?? await (await import('../executor/Executor')).Executor.create()
        return new Blockchain({
            executor,
            storage: opts?.storage ?? new LocalBlockchainStorage(),
            ...opts
        })
    }
}
