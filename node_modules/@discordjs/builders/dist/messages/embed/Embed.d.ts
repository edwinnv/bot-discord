import type { APIEmbed, APIEmbedAuthor, APIEmbedField, APIEmbedFooter, APIEmbedImage } from 'discord-api-types/v10';
import { type RestOrArray } from '../../util/normalizeArray';
export declare type RGBTuple = [red: number, green: number, blue: number];
export interface IconData {
    /**
     * The URL of the icon
     */
    iconURL?: string;
    /**
     * The proxy URL of the icon
     */
    proxyIconURL?: string;
}
export declare type EmbedAuthorData = Omit<APIEmbedAuthor, 'icon_url' | 'proxy_icon_url'> & IconData;
export declare type EmbedAuthorOptions = Omit<EmbedAuthorData, 'proxyIconURL'>;
export declare type EmbedFooterData = Omit<APIEmbedFooter, 'icon_url' | 'proxy_icon_url'> & IconData;
export declare type EmbedFooterOptions = Omit<EmbedFooterData, 'proxyIconURL'>;
export interface EmbedImageData extends Omit<APIEmbedImage, 'proxy_url'> {
    /**
     * The proxy URL for the image
     */
    proxyURL?: string;
}
/**
 * Represents a embed in a message (image/video preview, rich embed, etc.)
 */
export declare class EmbedBuilder {
    readonly data: APIEmbed;
    constructor(data?: APIEmbed);
    /**
     * Adds fields to the embed (max 25)
     *
     * @param fields The fields to add
     */
    addFields(...fields: RestOrArray<APIEmbedField>): this;
    /**
     * Removes, replaces, or inserts fields in the embed (max 25)
     *
     * @param index The index to start at
     * @param deleteCount The number of fields to remove
     * @param fields The replacing field objects
     */
    spliceFields(index: number, deleteCount: number, ...fields: APIEmbedField[]): this;
    /**
     * Sets the embed's fields (max 25).
     * @param fields The fields to set
     */
    setFields(...fields: RestOrArray<APIEmbedField>): this;
    /**
     * Sets the author of this embed
     *
     * @param options The options for the author
     */
    setAuthor(options: EmbedAuthorOptions | null): this;
    /**
     * Sets the color of this embed
     *
     * @param color The color of the embed
     */
    setColor(color: number | RGBTuple | null): this;
    /**
     * Sets the description of this embed
     *
     * @param description The description
     */
    setDescription(description: string | null): this;
    /**
     * Sets the footer of this embed
     *
     * @param options The options for the footer
     */
    setFooter(options: EmbedFooterOptions | null): this;
    /**
     * Sets the image of this embed
     *
     * @param url The URL of the image
     */
    setImage(url: string | null): this;
    /**
     * Sets the thumbnail of this embed
     *
     * @param url The URL of the thumbnail
     */
    setThumbnail(url: string | null): this;
    /**
     * Sets the timestamp of this embed
     *
     * @param timestamp The timestamp or date
     */
    setTimestamp(timestamp?: number | Date | null): this;
    /**
     * Sets the title of this embed
     *
     * @param title The title
     */
    setTitle(title: string | null): this;
    /**
     * Sets the URL of this embed
     *
     * @param url The URL
     */
    setURL(url: string | null): this;
    /**
     * Transforms the embed to a plain object
     */
    toJSON(): APIEmbed;
}
//# sourceMappingURL=Embed.d.ts.map