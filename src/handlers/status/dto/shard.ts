import { JarvanScript } from "../../..";
import { Regions } from "../../../models";
import { AbstractMethodClass } from "../../abstractmethod";
import Incident from "./incident";
import Message from "./message";
import Service from "./service";
import Translation from "./translation";

export default class Shard extends AbstractMethodClass {
  public name: string;
  public slug: string;
  public locales: string[];
  public hostname: string;
  public regionTag: string;
  public services: Service[];

  constructor(requestObject: any, region: Regions, wrapper: JarvanScript) {
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
