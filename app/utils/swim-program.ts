import Axolotl from '~/assets/media/ajolote.png'
import Koi from '~/assets/media/pez-koi.png'
import Seal from '~/assets/media/seal.png'
import Shark from '~/assets/media/shark-cat.png'
import DefaultIcon from '~/assets/media/shark.png'

export const iconSwimProgram = (programId: number) => {

    const icon: Record<number, string> = {
        1: Axolotl,
        2: Seal,
        3: Koi,
        4: Shark
    }

    return icon[programId] ?? DefaultIcon
}