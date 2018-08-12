import {PersonalInfo} from './personal-info/personal-info.model';
import {EducationalInfo} from './educational-details/educational-details.model';
import {ConfirmationInfo} from './confirmation-status/confirmation-status.model';

export class StudentData {
    personalInfo: PersonalInfo;
    educationalInfo: EducationalInfo;
    confirmInfo: ConfirmationInfo;
}