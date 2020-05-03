/**
 * User info
 *
 * @property {string} username - A Jenkins user
 * @example GET : https://{jenkinsHost}/user/:username/api/json
 */
export type UserResponse = User;

/**
 * Job info
 *
 * @property {string} jobName - The name of the job, or if in a folder, the path to the job,
 *   starting with the folder name. i.e. without the preceding "/job/"
 * @example GET : https://{jenkinsHost}/job/:jobName/api/json
 */
export type JobResponse = Job;

/**
 * Jobs info
 *
 * @property {string} folderName - Optional, the name of the folder in which to search for jobs
 * @example GET : https://{jenkinsHost}/:folderName/api/json?tree=jobs
 */
export type JobsResponse = Jobs;

/**
 * API Objects
 */

export interface User {
  /** internal Jenkins model */
  _class?: string;
  /** absolute url of the user */
  absoluteUrl?: string;
  /** description of the user */
  description?: string;
  /** full name of the user */
  fullName?: string;
  /** id/login name of the user */
  id?: string;
  /** a list of properties */
  property?: object[];
}

export interface Job {
  /** internal Jenkins model */
  _class?: string;
  /** a list of build actions
   * usually build actions and plugin actions */
  actions?: object[];
  /** description of the job */
  description?: string;
  /** display name of the job */
  displayName?: string;
  /** TODO (define) displayNameOrNull */
  displayNameOrNull?: string;
  /** full display name of the job, including enclosing folder names */
  fullDisplayName?: string;
  /** full name of the job */
  fullName?: string;
  /** name of the job */
  name?: string;
  /** url of the job */
  url?: string;
  /** indicates if the job is buildable */
  buildable?: boolean;
  /** summary list of the last 50 builds */
  builds?: BuildSummary[];
  /** color of the job indicating status */
  color?: string;
  /** summary of the first build */
  firstBuild?: BuildSummary;
  /** health report of the job */
  healthReport?: HealthReport;
  /** indicates if the job is in queue to be built */
  inQueue?: boolean;
  /** indicates if dependencies should be kept */
  keepDependencies?: boolean;
  /** summary of the last build */
  lastBuild?: BuildSummary;
  /** summary of the last completed build */
  lastCompletedBuild?: BuildSummary;
  /** summary of the last failed build */
  lastFailedBuild?: BuildSummary;
  /** summary of the last stable build */
  lastStableBuild?: BuildSummary;
  /** summary of the last successful build */
  lastSuccessfulBuild?: BuildSummary;
  /** summary of the last unstable build */
  lastUnstableBuild?: BuildSummary;
  /** summary of the last unsuccessful build */
  lastUnsuccessfulBuild?: BuildSummary;
  /** next build number used by the job */
  nextBuildNumber?: number;
  /** a list of build properties
   * usually build parameter properties and plugin properties */
  property?: object[];
  /** details of a queued item, if any */
  queueItem?: QueueItem;
  /** indicates if concurrent builds are permitted */
  concurrentBuild?: boolean;
  /** indicates if the job is disabled */
  disabled?: boolean;
  /** a summary list of downstream jobs */
  downstreamProjects?: JobSummary[];
  /** TODO (define) labelExpression */
  labelExpression?: string;
  /** the type of SCM used by the job */
  scm?: object;
  /** a summary list of upstream jobs */
  upstreamProjects?: JobSummary[];
}

export interface Jobs {
  /** internal Jenkins model */
  _class?: string;
  /** a summary list of jobs */
  jobs?: JobSummary[];
}

export interface BuildSummary {
  /** internal Jenkins model */
  _class?: string;
  /** build number of the build */
  number?: number;
  /** url of the build */
  url?: string;
}

export interface HealthReport {
  /** description of the health of a job */
  description?: string;
  /** css class of the icon used by Jenkins web interfaces */
  iconClassName?: string;
  /** url of the icon used by Jenkins for web interfaces */
  iconUrl?: string;
  /** score between 0 and 100 indicating the health of recent builds */
  score?: number;
}

export interface JobSummary {
  /** internal Jenkins model */
  _class?: string;
  /** name of the job */
  name?: string;
  /** url of the job */
  url?: string;
  /** color of the job indicating status */
  color?: string;
}

export interface QueueItem {
  /** internal Jenkins model */
  _class?: string;
  /** indicates if the queued item is blocked
   * usually true if concurrent builds are not permitted */
  blocked?: boolean;
  /** indicates if the queued item is buildable
   * usually true if concurrent builds are permitted, but waiting for available executor */
  buildable?: boolean;
  /** global build id */
  id?: number;
  /** timestamp of entry into queue */
  inQueueSince?: number;
  /** build parameters */
  params?: string;
  /** indicates if the queued item is stuck */
  stuck?: boolean;
  /** summary of the task in queue */
  task?: object;
  /** url of queued item */
  url?: string;
  /** reason for being queued */
  why?: string;
  /** timestamp of when queued item will be buildable */
  buildableStartMilliseconds?: number;
  /** indicates if the queued item is pending */
  pending?: boolean;
}
