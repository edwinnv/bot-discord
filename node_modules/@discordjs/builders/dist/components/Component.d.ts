import type { APIActionRowComponent, APIActionRowComponentTypes, APIBaseComponent, ComponentType } from 'discord-api-types/v10';
import type { JSONEncodable } from '../util/jsonEncodable';
export declare type AnyAPIActionRowComponent = APIActionRowComponentTypes | APIActionRowComponent<APIActionRowComponentTypes>;
/**
 * Represents a discord component
 */
export declare abstract class ComponentBuilder<DataType extends Partial<APIBaseComponent<ComponentType>> = APIBaseComponent<ComponentType>> implements JSONEncodable<AnyAPIActionRowComponent> {
    /**
     * The API data associated with this component
     */
    readonly data: Partial<DataType>;
    abstract toJSON(): AnyAPIActionRowComponent;
    constructor(data: Partial<DataType>);
}
//# sourceMappingURL=Component.d.ts.map