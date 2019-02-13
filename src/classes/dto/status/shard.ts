import JarvanScript from "../../../jarvanscript";
import JarvanEnum from "../../enums";
import JarvanModelInterface from "../../interfaces";

import { DTO } from "../abstract";
import { Incident } from "./incident";
import { Message } from "./message";
import { Service } from "./service";
import { Translation } from "./translation";

export class Shard extends DTO implements JarvanModelInterface.Status.Shard {
  public readonly name: string;
  public readonly slug: string;
  public readonly locales: string[];
  public readonly hostname: string;
  public readonly regionTag: string;
  public readonly services: Service[];

  public constructor(requestObject: any, region: JarvanEnum.Regions, wrapper: JarvanScript) {
    super(region, wrapper);
    const {
      name,
      region_tag,
      hostname,
      services,
      slug,
      locales,
    } = requestObject;

    this.name = name;
    this.slug = slug;
    this.locales = locales;
    this.hostname = hostname;
    this.regionTag = region_tag;
    this.services = createServices(services);
  }
}

function createServices(services: any) {
  return services.map((service) =>
    createService(service));
}

function createService(service: any) {
  const {
    status,
    incidents,
    name: serviceName,
    slug: serviceSlug,
  } = service;

  const incidentObjects = incidents.map((incident) =>
    createIncident(incident));

  return new Service(status, incidentObjects, serviceName, serviceSlug);
}

function createIncident(incident: any) {
  const {
    id: incidentId,
    active,
    created_at,
    updates,
  } = incident;
  const updateObjects = updates.map((update) =>
    createUpdate(update));

  return new Incident(incidentId, active, new Date(created_at), updateObjects);
}

function createUpdate(update: any) {
  const {
    id: updateId,
    author,
    content:
    updateContent,
    severity,
    createdAt,
    updatedAt,
    translations,
  } = update;

  const translationObjects = translations.map((translation) =>
    createTranslation(translation));

  return new Message(
    updateId,
    author,
    updateContent,
    severity,
    createdAt,
    updatedAt,
    translationObjects);
}

function createTranslation(translation: any) {
  const {
    locale,
    content,
    heading,
  } = translation;

  return new Translation(locale, content, heading);
}
