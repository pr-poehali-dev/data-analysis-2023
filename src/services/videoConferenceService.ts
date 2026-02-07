/**
 * Сервис для интеграции с видеоконференц-системами
 * Поддерживает создание комнат, управление участниками и получение ссылок
 */

export interface ConferenceRoom {
  id: string;
  name: string;
  design: "minimal" | "corporate" | "creative";
  hostUrl: string;
  participantUrl: string;
  maxParticipants: number;
  createdAt: Date;
  expiresAt: Date;
  status: "active" | "scheduled" | "ended";
}

export interface CreateRoomRequest {
  name: string;
  design: string;
  maxParticipants: number;
  scheduledDate?: Date;
  duration: number; // в минутах
  hostEmail: string;
  companyName?: string;
}

export interface RoomCredentials {
  roomId: string;
  hostUrl: string;
  participantUrl: string;
  password?: string;
  recordingEnabled: boolean;
}

class VideoConferenceService {
  private apiBaseUrl = import.meta.env.VITE_API_URL || "/api";

  /**
   * Создаёт новую комнату для видеоконференции
   */
  async createRoom(request: CreateRoomRequest): Promise<RoomCredentials> {
    try {
      // TODO: Заменить на реальный API-запрос
      const response = await fetch(`${this.apiBaseUrl}/rooms/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error("Failed to create room");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      // Временная заглушка для демонстрации
      console.warn("API not connected, returning mock data");
      return this.getMockRoomCredentials(request);
    }
  }

  /**
   * Получает информацию о комнате по ID
   */
  async getRoomInfo(roomId: string): Promise<ConferenceRoom | null> {
    try {
      const response = await fetch(`${this.apiBaseUrl}/rooms/${roomId}`);
      
      if (!response.ok) {
        return null;
      }

      return await response.json();
    } catch (error) {
      console.error("Failed to get room info:", error);
      return null;
    }
  }

  /**
   * Получает список активных комнат
   */
  async getActiveRooms(): Promise<ConferenceRoom[]> {
    try {
      const response = await fetch(`${this.apiBaseUrl}/rooms/active`);
      
      if (!response.ok) {
        throw new Error("Failed to fetch active rooms");
      }

      return await response.json();
    } catch (error) {
      console.error("Failed to get active rooms:", error);
      return [];
    }
  }

  /**
   * Завершает конференцию
   */
  async endConference(roomId: string): Promise<boolean> {
    try {
      const response = await fetch(`${this.apiBaseUrl}/rooms/${roomId}/end`, {
        method: "POST",
      });

      return response.ok;
    } catch (error) {
      console.error("Failed to end conference:", error);
      return false;
    }
  }

  /**
   * Получает запись конференции
   */
  async getRecording(roomId: string): Promise<string | null> {
    try {
      const response = await fetch(`${this.apiBaseUrl}/rooms/${roomId}/recording`);
      
      if (!response.ok) {
        return null;
      }

      const data = await response.json();
      return data.recordingUrl;
    } catch (error) {
      console.error("Failed to get recording:", error);
      return null;
    }
  }

  /**
   * MOCK: Временные данные для демонстрации
   */
  private getMockRoomCredentials(request: CreateRoomRequest): RoomCredentials {
    const roomId = `room-${Date.now()}`;
    const baseUrl = window.location.origin;
    
    return {
      roomId,
      hostUrl: `${baseUrl}/conference/${roomId}?role=host&design=${request.design}`,
      participantUrl: `${baseUrl}/conference/${roomId}?role=participant&design=${request.design}`,
      password: Math.random().toString(36).substring(2, 10),
      recordingEnabled: true,
    };
  }

  /**
   * Валидация доступности комнаты
   */
  async checkRoomAvailability(
    date: Date,
    duration: number
  ): Promise<{ available: boolean; conflictingRooms?: string[] }> {
    try {
      const response = await fetch(`${this.apiBaseUrl}/rooms/availability`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ date, duration }),
      });

      if (!response.ok) {
        throw new Error("Failed to check availability");
      }

      return await response.json();
    } catch (error) {
      console.error("Failed to check availability:", error);
      // По умолчанию считаем, что комната доступна
      return { available: true };
    }
  }

  /**
   * Отправка уведомлений участникам
   */
  async sendInvitations(
    roomId: string,
    emails: string[],
    message?: string
  ): Promise<boolean> {
    try {
      const response = await fetch(`${this.apiBaseUrl}/rooms/${roomId}/invite`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emails, message }),
      });

      return response.ok;
    } catch (error) {
      console.error("Failed to send invitations:", error);
      return false;
    }
  }
}

// Singleton экземпляр
export const videoConferenceService = new VideoConferenceService();